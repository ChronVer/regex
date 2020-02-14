


//  E X P O R T S

export const chronverRegex: RegExp = /^(((\d{4})\.(\d{2})\.(\d{2})([.\-+][\d|\w]?.+))|((\d{4})\.(\d{2})\.(\d{2})(\.(\d{1,})))|((\d{4})\.(\d{2})\.(\d{2})))$/i;
export default (suppliedInput: string): boolean => chronverRegex.test(String(suppliedInput));
