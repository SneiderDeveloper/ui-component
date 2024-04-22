import { Avatar, AvatarIcon } from "@nextui-org/react";

export  function BgPrimary() {
    return (
        <div className="flex items-center">
            <Avatar
                icon={<AvatarIcon />}
                classNames={{
                    base: "bg-primary",
                    icon: "text-white/80",
                }}
            />
        </div>
    );
}
export function BgGradient() {
    return (
        <div className="flex items-center">
            <Avatar
                icon={<AvatarIcon />}
                classNames={{
                    base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                    icon: "text-black/80",
                }}
            />
        </div>
    );
}
export  function BgWarning() {
    return (
        <div className="flex items-center">
            <Avatar
                icon={<AvatarIcon />}
                classNames={{
                    base: "bg-red-400",
                    icon: "text-black/80",
                }}
            />
        </div>
    );
}
export  function BgAmber() {
    return (
        <div className="flex items-center">
            <Avatar
                icon={<AvatarIcon />}
                classNames={{
                    base: "bg-amber-300",
                    icon: "text-white/80",
                }}
            />
        </div>
    );
}
