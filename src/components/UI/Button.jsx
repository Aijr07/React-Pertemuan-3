const Button = ({ variant = "primary", children, ...props }) => {
	return (
		<button
			className={join(
				BUTTON_VARIANTS[variant],
				"font-bold h-full text-base w-36 inline-flex py-3 rounded-md justify-center"
			)}
			{...props}
		>
			{children}
		</button>
	);
};

const BUTTON_VARIANTS = {
	primary: "bg-primary text-white",
	outlined: "border-primary text-primary border-2",
	danger: "bg-red-500 text-white",
};

function join(...args) {
	return args.filter(Boolean).join(" ");
}

export default Button;