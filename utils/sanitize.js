// XSS Protection - HTML sanitization utility

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text safe for HTML
 */
function escapeHtml(text) {
    if (typeof text !== 'string') {
        return String(text);
    }
    
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Validates and sanitizes a URL
 * @param {string} url - URL to validate
 * @returns {string|null} - Sanitized URL or null if invalid
 */
function sanitizeUrl(url) {
    if (typeof url !== 'string') return null;
    
    try {
        const parsed = new URL(url);
        // Only allow http, https protocols
        if (!['http:', 'https:'].includes(parsed.protocol)) {
            return null;
        }
        return parsed.href;
    } catch (e) {
        return null;
    }
}

/**
 * Validates a number is within safe range
 * @param {number} num - Number to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} - True if valid
 */
function validateNumber(num, min = 0, max = Number.MAX_SAFE_INTEGER) {
    return typeof num === 'number' && 
           !isNaN(num) && 
           isFinite(num) && 
           num >= min && 
           num <= max;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { escapeHtml, sanitizeUrl, validateNumber };
}

