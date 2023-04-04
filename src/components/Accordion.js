import React, {useState} from "react";
const Accordion = (props) => {
    const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }

    return (
        <div className={`w-[280px] p-5 bg-[#e9e9e9] border border-[#c9c6c655] rounded-md mb-5 duration-500 group ${data.active === 1 ? 'is-active bg-white' : ''}`}
        >
            <div className="flex items-center">
                <div className="w-full group-[.is-active]:font-bold">
                {data.question} 
                </div>
                <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]" onClick={handleToggleActive}>
                    >
                </div>
            </div>
            <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
                My name is Lun Dev 
            </div>
        </div>
    );
}
export default Accordion;