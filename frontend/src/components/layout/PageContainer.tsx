import React from 'react';
import { PageHeader } from '../content/PageHeader';

interface PageContainerProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  showHeader = true
}) => {
  const handleCreateClick = () => {
    console.log('Create button clicked');
  };

  return (
    <div className="min-h-screen bg-white">
      {showHeader && <PageHeader onCreateClick={handleCreateClick} />}

      <div className="h-[calc(100vh-42px)] overflow-hidden">
        <div className="h-[calc(100vh-42px-72px)] relative">
          <div className="h-full max-w-[700px] mx-auto w-full">
            <div className="h-full overflow-y-auto custom-scrollbar px-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 