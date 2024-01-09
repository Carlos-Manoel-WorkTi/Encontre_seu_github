import {  TiArrowRightOutline,TiArrowLeftOutline } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import styled from "styled-components";
import { MdCancel,MdDeleteForever,  MdOutlineCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";

export const StopEdit = styled(MdOutlineCancel)`
&:hover{
   color: #5c19b4;
   transform: scale(1.2);
}`

export const Stars = styled(FaRegStar)`
color: #fdfdd6;
&:hover{
   color: #f2f20e;
   transform: scale(1.2);
}
`
export const MdDelete = styled(MdDeleteForever)`
color: red;
&:hover{
   color: #cd2a2acf;
   transform: scale(1.3);
}
`
export const Save = styled(GiConfirmed)`
    font-size: 1.5em;
    background-color: #09900b;
    border-radius: 50%;
`
export const Cancel = styled(MdCancel)`
    font-size: 1.5em;
    background-color: red;
    border-radius: 50%;
    /* color: white; */
`
export  const SetaLeft = styled(TiArrowLeftOutline)`
 color: #ffffff;
 font-size: 3em;

 &:hover{
    color: #75bcf2;
 font-size: 3.3em;
 }
`

export const ConfigIcon = styled(CiMenuKebab)`
   display: flex;
   text-align: end;
   justify-content: end;
   align-items: end;
   &:hover{
   color: #8241eacf;
   transform: scale(1.4);
}
`
export  const SetaRight = styled(TiArrowRightOutline)`
 color: #ffffff;
 font-size: 3em;
 
 &:hover{
    color: #75bcf2;
 font-size: 3.3em;
 }
`
export const AddRep = styled(IoIosAddCircleOutline)`

&:hover{
   color: #4f0080;
   transform: scale(1.2);

}
`
export const ButtonMoreRespRight = styled(GoChevronRight)`
   font-size: 1.5em;
`
export const ButtonMoreRespLeft = styled(GoChevronLeft)`
   font-size: 1.5em;
`