import { Space_Mono } from 'next/font/google'
import { TextProps } from './BigTitle';

const space_mono = Space_Mono({subsets: ["latin"], weight: ["700"]});

export const Title: React.FC<TextProps> = ({
	content,
}) => {
  return (
	<h1 className={`${space_mono.className} text-[96px] leading-[128px] text-Grape`}>{content}</h1>
  )
}
