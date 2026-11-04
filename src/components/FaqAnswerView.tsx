import React from 'react';
import { AlertCircle, CheckCircle2, MapPin, Compass, CalendarClock, CreditCard, Receipt, FileText } from 'lucide-react';

interface FaqAnswerViewProps {
  content: string;
  isZh: boolean;
}

export const FaqAnswerView: React.FC<FaqAnswerViewProps> = ({ content, isZh }) => {
  // Split into structural blocks separated by double newlines
  const blocks = content.split(/\n\n+/);

  const renderInlineFormatted = (text: string) => {
    // Splits on **bold highlights**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2);
        return (
          <span
            key={idx}
            className="font-semibold text-[#1e2a1b] bg-[#ede4d7] px-1.5 py-0.5 rounded-sm mx-0.5 border border-[#dfd4c3]/60 inline"
          >
            {inner}
          </span>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#333f30] leading-[1.8] font-body-md">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();

        // 1. Notice / Alert callout block
        if (
          trimmed.startsWith('Important Notice:') ||
          trimmed.startsWith('重要提示：') ||
          trimmed.startsWith('【重要提示】') ||
          trimmed.includes('do not schedule multiple therapy sessions') ||
          trimmed.includes('请勿在同一天内预约多次治疗')
        ) {
          return (
            <div
              key={bIdx}
              className="p-4 sm:p-4.5 rounded-xl bg-[#faf3ed] border border-[#e8d5c4] text-[#7a3e20] flex items-start gap-3 shadow-2xs"
            >
              <AlertCircle className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
              <div className="text-sm sm:text-[14.5px] leading-relaxed">
                {renderInlineFormatted(trimmed)}
              </div>
            </div>
          );
        }

        // 2. Service Scope / Licensure Cards (Clinical Psychotherapy, Coaching, Future Licensure)
        if (
          trimmed.startsWith('Clinical Psychotherapy') ||
          trimmed.startsWith('临床心理治疗') ||
          trimmed.startsWith('Solution-Focused Coaching') ||
          trimmed.startsWith('焦点解决辅导') ||
          trimmed.startsWith('Future Expansion') ||
          trimmed.startsWith('未来执照扩展')
        ) {
          const lines = trimmed.split('\n');
          const heading = lines[0];
          const body = lines.slice(1).join('\n');

          const isLocation = heading.includes('Clinical') || heading.includes('临床');
          const isCoaching = heading.includes('Coaching') || heading.includes('辅导');
          const isFuture = heading.includes('Expansion') || heading.includes('扩展');

          return (
            <div
              key={bIdx}
              className="p-4 sm:p-5 rounded-xl bg-white border border-[#2e382b]/8 space-y-2.5 shadow-2xs"
            >
              <div className="flex items-center gap-2 text-primary">
                {isLocation && <MapPin className="w-4 h-4 text-[#a35e3e]" />}
                {isCoaching && <Compass className="w-4 h-4 text-[#4b6345]" />}
                {isFuture && <CalendarClock className="w-4 h-4 text-[#7d6951]" />}
                <h4 className="font-headline-md font-semibold text-primary text-base sm:text-[16px]">
                  {renderInlineFormatted(heading)}
                </h4>
              </div>
              {body && (
                <div className="text-on-surface-variant pl-6 sm:pl-6 text-[14px] sm:text-[15px] leading-[1.75]">
                  {renderInlineFormatted(body)}
                </div>
              )}
            </div>
          );
        }

        // 3. Bracketed subheadings like 【网络内保险】 or "In-Network Insurance", "Out-of-Network & Superbills", "Services Not Covered"
        if (
          trimmed.startsWith('【') ||
          trimmed.startsWith('In-Network Insurance') ||
          trimmed.startsWith('Out-of-Network & Superbills') ||
          trimmed.startsWith('Services Not Covered by Insurance')
        ) {
          const lines = trimmed.split('\n');
          const titleLine = lines[0];
          const restLines = lines.slice(1);

          const isNetwork = titleLine.includes('In-Network') || titleLine.includes('网络内');
          const isOon = titleLine.includes('Out-of-Network') || titleLine.includes('网络外');
          const isNotCovered = titleLine.includes('Not Covered') || titleLine.includes('不被保险');

          return (
            <div key={bIdx} className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2e382b]/8 text-primary font-label-md text-xs sm:text-sm font-semibold tracking-wide">
                {isNetwork && <CreditCard className="w-3.5 h-3.5 text-[#4b6345]" />}
                {isOon && <Receipt className="w-3.5 h-3.5 text-[#a35e3e]" />}
                {isNotCovered && <FileText className="w-3.5 h-3.5 text-[#7d6951]" />}
                <span>{renderInlineFormatted(titleLine)}</span>
              </div>
              {restLines.length > 0 && (
                <div className="text-on-surface-variant space-y-2 pt-1 leading-relaxed">
                  {restLines.map((line, lIdx) => {
                    const lineTrimmed = line.trim();
                    if (lineTrimmed.startsWith('• ') || lineTrimmed.startsWith('- ')) {
                      return (
                        <div
                          key={lIdx}
                          className="flex items-start gap-2.5 pl-2 sm:pl-3 py-1 bg-[#fafaf6] rounded-lg border border-[#eeeee6] px-3 my-1"
                        >
                          <span className="text-[#a35e3e] font-bold text-sm mt-0.5">•</span>
                          <span className="text-sm sm:text-[14.5px] leading-relaxed">
                            {renderInlineFormatted(lineTrimmed.replace(/^[•-]\s*/, ''))}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <p key={lIdx} className="leading-relaxed">
                        {renderInlineFormatted(line)}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        // 4. Bullet lists (CPT codes or fee lists)
        if (trimmed.split('\n').some((l) => l.trim().startsWith('•') || l.trim().startsWith('-'))) {
          const lines = trimmed.split('\n');
          return (
            <div key={bIdx} className="space-y-2 my-2">
              {lines.map((line, lIdx) => {
                const lineTrimmed = line.trim();
                if (lineTrimmed.startsWith('•') || lineTrimmed.startsWith('-')) {
                  const contentWithoutBullet = lineTrimmed.replace(/^[•-]\s*/, '');
                  return (
                    <div
                      key={lIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#2e382b]/8 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4b6345] shrink-0 mt-1" />
                      <div className="text-sm sm:text-[14.5px] leading-relaxed flex-1">
                        {renderInlineFormatted(contentWithoutBullet)}
                      </div>
                    </div>
                  );
                }
                return (
                  <p key={lIdx} className="leading-relaxed">
                    {renderInlineFormatted(line)}
                  </p>
                );
              })}
            </div>
          );
        }

        // 5. Standard paragraph with inline formatting
        return (
          <p key={bIdx} className="leading-relaxed text-[#333f30]">
            {renderInlineFormatted(trimmed)}
          </p>
        );
      })}
    </div>
  );
};
