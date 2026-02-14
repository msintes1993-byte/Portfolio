import { useState, useEffect } from 'react';

interface TechnicalGlyphIndicatorProps {
  /** Array of Japanese technical glyphs to cycle through - ALL MUST HAVE SAME CHARACTER COUNT */
  glyphs: string[];
  /** Optional className for styling */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

/**
 * TechnicalGlyphIndicator - Animated Japanese text component
 * 
 * Cycles through technical Kanji/Katakana characters with smooth cross-fade
 * to create a subtle "data fluctuation" effect without layout shifts.
 * 
 * CONSTRAINTS:
 * - All variants MUST have identical character count (full-width only)
 * - Only ONE character changes per animation step
 * - 300ms dissolve transition with linear easing
 * - Fixed width container (no layout jitter)
 * - Uses 'Noto Sans JP' exclusively for consistent rendering
 * - 2000ms consistent delay
 */
export function TechnicalGlyphIndicator({ 
  glyphs, 
  className = "text-muted-foreground",
  style = {}
}: TechnicalGlyphIndicatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Fixed 2000ms delay for calm, predictable loop
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      
      // Wait for fade-out before changing content
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % glyphs.length);
        setIsTransitioning(false);
      }, 150); // Half of 300ms transition
      
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [currentIndex, glyphs.length]);
  
  // Calculate fixed width based on character count
  // Each full-width Japanese character is approximately 1em wide
  const charCount = glyphs[0]?.length || 0;
  const fixedWidth = `${charCount}em`;
  
  const containerStyle: React.CSSProperties = {
    fontFamily: "'Noto Sans JP', sans-serif", // Noto Sans JP ONLY
    display: 'inline-block',
    width: fixedWidth, // Fixed width to prevent jitter
    textAlign: 'left', // Anchor to left
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
    ...style
  };
  
  const textStyle: React.CSSProperties = {
    opacity: isTransitioning ? 0 : 1,
    transition: 'opacity 300ms linear', // 300ms dissolve with linear curve
  };
  
  return (
    <span 
      style={containerStyle}
      className={className}
    >
      <span style={textStyle}>
        {glyphs[currentIndex]}
      </span>
    </span>
  );
}

/**
 * Predefined glyph sets for common technical indicators
 * CRITICAL: All variants in each set MUST have:
 * - IDENTICAL character counts (exact same number)
 * - ALL FULL-WIDTH (Zenkaku) characters only
 * - NO half-width (Hankaku) mixing
 */
export const GLYPH_SETS = {
  // Interface - 7 full-width characters
  // Each step mutates only one character position
  interface: [
    'インターフェース', // Original (7 chars)
    'シンターフェース', // Mutate pos 0
    'シスターフェース', // Mutate pos 1
    'シスタムフェース', // Mutate pos 3
    'シスタムセース',   // Mutate pos 5
    'インターフェース', // Return to original
  ],
  
  // About - 5 full-width characters
  about: [
    '私について', // Original (5 chars)
    '情について', // Mutate pos 0
    '情報ついて', // Mutate pos 1
    '情報データ', // Mutate pos 2-3
    '私について', // Return to original
  ],
  
  // Contact - 5 full-width characters
  contact: [
    'コンタクト', // Original (5 chars)
    '連タクト',   // Mutate pos 0
    '連絡クト',   // Mutate pos 2
    '連絡接続',   // Mutate pos 3-4
    'コンタクト', // Return to original
  ],
  
  // Projects - 6 full-width characters
  projects: [
    'プロジェクト', // Original (6 chars)
    '開発ジェクト', // Mutate pos 0-1
    '開発プロクト', // Mutate pos 2-3
    '開発プロセス', // Mutate pos 4-5
    'プロジェクト', // Return to original
  ],
  
  // Portfolio - 7 full-width characters
  portfolio: [
    'ポートフォリオ', // Original (7 chars)
    'アーカイブリオ', // Mutate pos 0-3
    'アーカイブ記録', // Mutate pos 5-6
    'ドキュメントオ', // Different mutation
    'ポートフォリオ', // Return to original
  ],
  
  // Platform - 8 full-width characters
  platform: [
    'プラットフォーム', // Original (8 chars)
    'システムフォーム', // Mutate pos 0-3
    'システム環境ーム', // Mutate pos 4-5
    'システム環境基盤', // Mutate pos 6-7
    'プラットフォーム', // Return to original
  ],
  
  // System - 4 full-width characters (replaced 3-char with 4-char)
  system: [
    'システム', // Original (4 chars)
    'コマンド', // Same length replacement
    'プロセス', // Same length replacement
    'モジュル', // Same length replacement
    'システム', // Return to original
  ],
  
  // Dashboard - 7 full-width characters (ダッシュボード = ダ+ッ+シ+ュ+ボ+ー+ド)
  dashboard: [
    'ダッシュボード', // Original (7 chars)
    '制御盤ボードオ', // Mutate to maintain 7 chars
    '制御盤表示パネ', // Mutate to maintain 7 chars  
    'コンソールパネ', // Different mutation (7 chars)
    'ダッシュボード', // Return to original
  ],
};
