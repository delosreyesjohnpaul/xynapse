import { useQueryState, parseAsBoolean } from "nuqs";

export const useEditTasktModal = () => {
    const [isOpen, setIsOpen] = useQueryState(
        "edit-task",
        parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
    );

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {
        isOpen,
        open,
        close,
        setIsOpen,
    };
};