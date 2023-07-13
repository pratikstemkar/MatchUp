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

export function getCurrentTime(): string {
	const currentDate = new Date();
	const hours = String(currentDate.getHours()).padStart(2, "0");
	const minutes = String(currentDate.getMinutes()).padStart(2, "0");
	const seconds = String(currentDate.getSeconds()).padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}
