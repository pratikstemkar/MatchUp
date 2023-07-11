import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const slideLeft = () => {
	const slider = document.getElementById("slider");
	slider.scrollLeft = slider?.scrollLeft - 600;
};

export const slideRight = () => {
	const slider = document.getElementById("slider");
	slider.scrollLeft = slider?.scrollLeft + 600;
};
