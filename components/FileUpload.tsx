import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (data: string) => void;
  disabled: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, disabled }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        onFileUpload(fileContent);
      };
      reader.readAsText(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
    disabled,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
        ${isDragActive ? 
          'border-blue-500 bg-blue-50 dark:bg-blue-900/50 dark:border-blue-400' : 
          'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800'}
        ${disabled ? 
          'cursor-not-allowed bg-gray-100 opacity-60 dark:bg-gray-700/50' : 
          'hover:border-blue-400 dark:hover:border-blue-500'}`}
    >
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className="text-blue-600 dark:text-blue-300">Drop the file here ...</p> :
          <div>
            <p className="text-gray-600 dark:text-gray-400">Drag & drop a CSV file here, or click to select a file.</p>
            <p className="text-sm text-gray-500 mt-2">Only *.csv files will be accepted</p>
            {fileName && !disabled && <p className="text-green-600 dark:text-green-400 font-semibold mt-4">Selected: {fileName}</p>}
          </div>
      }
    </div>
  );
};

export default FileUpload;