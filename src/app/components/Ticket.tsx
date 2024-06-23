import styles from "./fonts/Quote.module.css";

interface TicketProps {
  content: string;
  color: string;
}

export const Ticket: React.FC<TicketProps> = ({ content, color }) => {
  return (
    <div
      className={`${styles["font-nanum-pen-script"]} ${color} h-[80px] w-[80px] md:h-[60px] md:w-[60px] max-md:h-[40px] max-md:w-[40px] p-2 text-[24px] md:text-[20px] leading-6 md:leading-4 max-lg:p-1 max-md:text-[12px] max-md:leading-3 text-center text-black`}
    >
      {content}
    </div>
  );
};
