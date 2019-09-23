export { };

declare global {
    interface String {
        quoted(): string;
    }
}

String.prototype.quoted = function(): string {
    return `'${(this as String).valueOf()}'`;
};