
/**
 * Formats a number as Indonesian Rupiah currency
 * 
 * @param amount - The amount to format
 * @param options - Formatting options
 * @returns Formatted currency string
 * 
 * Example: formatCurrency(1000000) returns "Rp 1.000.000"
 */
export const formatCurrency = (
  amount: number,
  options: {
    withSymbol?: boolean;
    withSpacing?: boolean;
    compact?: boolean;
  } = {}
): string => {
  const {
    withSymbol = true,
    withSpacing = true,
    compact = false,
  } = options;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: compact ? "compact" : "standard",
    compactDisplay: "short",
  });

  let formatted = formatter.format(amount);
  
  // Indonesian formatter returns "Rp1.234.567" by default
  
  // Replace IDR symbol with Rp
  formatted = formatted.replace(/\s*IDR\s*/, "Rp");
  
  // Remove spacing if not wanted
  if (!withSpacing) {
    formatted = formatted.replace(/\s+/g, "");
  }
  
  // Remove symbol if not wanted
  if (!withSymbol) {
    formatted = formatted.replace(/Rp\s*/, "");
  }

  return formatted;
};
