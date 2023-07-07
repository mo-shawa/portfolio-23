import { motion } from "framer-motion"

export default function SocialButton({
	href,
	children,
	hoverColor = "github",
	bgColor = "white",
}: SocialButtonProps) {
	let bgColorClass
	let hoverColorClass

	switch (bgColor) {
		case "white":
			bgColorClass = "bg-white"
			break
	}

	switch (hoverColor) {
		case "github":
			hoverColorClass = "hover:bg-github"
			break
		case "twitter":
			hoverColorClass = "hover:bg-twitter"
			break
		case "linkedin":
			hoverColorClass = "hover:bg-linkedin"
			break
	}

	return (
		<motion.a
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.95,
			}}
			href={href}
			target="_blank"
			className={`h-10 w-10 rounded-full duration-200 ease-in-out flex justify-center items-center group border shadow-sm ${bgColorClass} hover:shadow-md ${hoverColorClass} transition-all`}
		>
			<div className="fill-black transition-colors duration-200 ease-in group-hover:fill-white object-">
				{children}
			</div>
		</motion.a>
	)
}

type SocialButtonProps = {
	href: string
	children?: React.ReactNode
	hoverColor?: string
	bgColor?: string
}
