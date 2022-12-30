import {ReactElement} from "react";

export default function Popup ({
trigger,
children,
setTrigger,
}:{
trigger: boolean,
children: string | ReactElement | null | undefined ;
setTrigger: (trigger: boolean)=> void}
){

    return (trigger)
            ? ((<div className={"Popup"}>
                    <div className={"Popup-inner"}>
                        <button className={"close-button"} onClick={() => setTrigger(false)}>X</button>
                        {children}
                    </div>
                </div>))
            : <div></div>

}