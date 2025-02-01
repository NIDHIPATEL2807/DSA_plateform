import * as React from 'react';

const Table = React.forwardRef(({ className, ...props }, ref) => (
    <table ref={ref} className={`w-full ${className}`} {...props} />
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
    <thead ref={ref} className={`bg-gray-100 ${className}`} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
    <tbody ref={ref} className={className} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
    <tfoot ref={ref} className={`bg-gray-100 ${className}`} {...props} />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
    <tr ref={ref} className={`border-b ${className}`} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
    <th ref={ref} className={`p-4 text-left ${className}`} {...props} />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
    <td ref={ref} className={`p-4 ${className}`} {...props} />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
    <caption ref={ref} className={`text-sm text-gray-600 ${className}`} {...props} />
));
TableCaption.displayName = 'TableCaption';

export {
    Table, TableBody, TableCaption, TableCell, TableFooter,
    TableHead, TableHeader, TableRow
};
