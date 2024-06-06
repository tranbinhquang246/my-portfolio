import { useState } from 'react';

type CopyToClipboardResult = [(text: string) => void, boolean];

const useCopyToClipboard = (): CopyToClipboardResult => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      setIsCopied(false);
    }
  };

  return [copyToClipboard, isCopied];
};

export default useCopyToClipboard;
