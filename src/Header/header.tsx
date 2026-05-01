import { Avatar } from "@mantine/core";
import { IconChefHatFilled, IconBell, IconSettings } from "@tabler/icons-react";

const Header = () => {
    return <div className="w-full bg-black px-5  text-white  h-29   flex justify-between p-4 items-center
    ">
        <div className="flex gap-2 items-center ">
            <IconChefHatFilled className="h-10 w-10" stroke={1.25} />
            <div className="text-3xl">I-Jobs</div>

        </div>
        <div className="flex gap-3">
            <a href="">Find Job</a>
            <a href="">Find Talent</a>
            <a href=""> Upload Job</a>
            <a href="">About US</a>
        </div>
        <div className="flex items-center gap-2">
            <IconBell />
            <div className="flex items-center gap-4">
                <div>SKY</div>
                <Avatar src="avatar.png" alt="it's me" />
                <IconSettings />
            </div>


        </div >
    </div >
}; export default Header;