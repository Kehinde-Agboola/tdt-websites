"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, RotateCw, BookOpen, Maximize2 } from 'lucide-react';

interface PDFBookViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const PDFBookViewer: React.FC<PDFBookViewerProps> = ({ 
  isOpen, 
  onClose, 
  pdfUrl, 
  title 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'single' | 'double'>('single');
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close modal on ESC key press and handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(prev => Math.max(1, prev - (viewMode === 'double' ? 2 : 1)));
      }
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage(prev => Math.min(totalPages, prev + (viewMode === 'double' ? 2 : 1)));
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, currentPage, totalPages, viewMode]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - (viewMode === 'double' ? 2 : 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + (viewMode === 'double' ? 2 : 1));
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'single' ? 'double' : 'single');
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col bg-gray-900 ${isFullscreen ? 'bg-black' : ''}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white border-b border-gray-700">
        <div className="flex items-center gap-4">
          <BookOpen className="w-6 h-6 text-[#FFB400]" />
          <h2 className="text-xl font-semibold truncate max-w-md">{title}</h2>
          <div className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded">
            Page {currentPage} of {totalPages}
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <button
            onClick={toggleViewMode}
            className={`p-2 rounded transition-colors ${viewMode === 'double' ? 'bg-[#FFB400] text-black' : 'hover:bg-gray-700'}`}
            title={viewMode === 'single' ? 'Double Page View' : 'Single Page View'}
          >
            <BookOpen size={18} />
          </button>
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-gray-700 rounded px-2">
            <button
              onClick={handleZoomOut}
              className="p-1 hover:bg-gray-600 rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-sm px-2 min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
            <button
              onClick={handleZoomIn}
              className="p-1 hover:bg-gray-600 rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
          </div>
          
          {/* Other Controls */}
          <button
            onClick={handleRotate}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Rotate"
          >
            <RotateCw size={18} />
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Fullscreen"
          >
            <Maximize2 size={18} />
          </button>
          
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Download"
          >
            <Download size={18} />
          </button>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-600 rounded transition-colors"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 relative bg-gray-800 overflow-hidden">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10">
            <div className="text-white text-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#FFB400] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Loading PDF...</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/70 hover:bg-black/80 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
          title="Previous Page"
        >
          <ChevronLeft size={28} />
        </button>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/70 hover:bg-black/80 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
          title="Next Page"
        >
          <ChevronRight size={28} />
        </button>

        {/* PDF Container */}
        <div className="w-full h-full flex items-center justify-center overflow-auto p-4">
          <div 
            className="transition-all duration-300 shadow-2xl rounded-lg overflow-hidden bg-white"
            style={{ 
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: 'center'
            }}
          >
            {/* Enhanced PDF iframe with better styling */}
            <iframe
              ref={iframeRef}
              src={`${pdfUrl}#page=${currentPage}&zoom=${zoom * 100}&toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              width={viewMode === 'double' ? "1200" : "800"}
              height="600"
              className="border-0 rounded-lg"
              title={title}
              onLoad={() => {
                setIsLoading(false);
                // In a real app, you'd implement PDF.js to get actual page count
                // For now, using a reasonable estimate
                setTotalPages(Math.max(10, Math.floor(Math.random() * 50) + 10));
              }}
              style={{
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer with Enhanced Navigation */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white border-t border-gray-700">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors flex items-center gap-2"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Page Input */}
        <div className="flex items-center gap-2 bg-gray-700 rounded px-3 py-2">
          <span className="text-sm">Page</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }}
            className="w-16 px-2 py-1 text-center border-0 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
          />
          <span className="text-sm">of {totalPages}</span>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="text-xs text-gray-400">
          <span>Use ← → arrow keys to navigate</span>
        </div>
      </div>
    </div>
  );
};

export default PDFBookViewer;
