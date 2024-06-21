import styles from "./fonts/Quote.module.css";

interface TicketProps {
  content: string;
  color: string;
}

export const Ticket: React.FC<TicketProps> = ({ content, color }) => {
  return (
    <div
      className={`${styles["font-nanum-pen-script"]} ${color} h-[80px] w-[80px] max-sm:h-[40px] max-sm:w-[40px] p-2 text-[24px] leading-6 max-sm:p-1 max-sm:text-[12px] max-sm:leading-3 text-center text-black`}
    >
      {content}
    </div>
  );
};
