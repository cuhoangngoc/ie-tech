const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 block w-full border p-2`}
        {...props}
    />
)

export default Input
