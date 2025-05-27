"use client";
import { TypeAnimation } from 'react-type-animation';

function leftMain() {
    return (
        <div className="font-poppins font-semibold text-white p-4 pt-[200px] text-7xl pl-20">
            <h1>
                Hello, I'm Adit a <br />
                <span className="text-blue-500">
                    <TypeAnimation
                        sequence={[
                            'Front End Web Developer', // text to type
                            2000,                      // wait 2s
                            '',                        // clear
                            'UI/UX Designer',        // next text
                            2000,
                            '',
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </h1>
        </div>
    );
}

export default leftMain;
