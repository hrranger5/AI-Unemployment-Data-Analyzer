
export interface ChartDataPoint {
  date: string;
  rate: number;
}

export interface Insight {
  title: string;
  text: string;
  icon?: 'trend' | 'impact' | 'policy' | 'recession' | 'growth' | 'inflation' | 'seasonal';
}

export interface AnalysisResult {
  pythonCode: string;
  chartData: ChartDataPoint[];
  insights: Insight[];
}