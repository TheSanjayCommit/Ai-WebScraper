import { ExternalLink } from 'lucide-react';

export default function SourceList({ sources }) {
    if (!sources || sources.length === 0) return null;

    return (
        <div className="mt-4 pt-4 border-t border-gray-700">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sources.map((source, idx) => (
                    <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 group text-xs text-gray-300"
                    >
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                            <span className="text-[10px] font-bold">{idx + 1}</span>
                        </div>
                        <span className="truncate flex-1" title={source.title}>{source.title}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white" />
                    </a>
                ))}
            </div>
        </div>
    );
}
