import { StarArea, StarText, StarView } from "./styles";
import StarFull from "../../assets/star.svg";
import StarHalf from "../../assets/star_half.svg";
import StarEmpty from "../../assets/star_empty.svg";

interface Props {
    stars: number; // Definindo stars como um número
    showNumber: boolean;
}
export default function Stars({stars, showNumber}: Props){
   
    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars -  floor;
    for (var i = 0; i < floor; i++) { // Incrementando o valor de i dentro do loop
        s[i] = 2;
    }
    
    if (left > 0) {
        s[i] = 1; // Usar i (valor incrementado) para atribuir a parte fracionária da estrela
    }
    return(
        <StarArea>
            {s.map((i, k)=>(
                <StarView key={k}>
                    {i === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
                    {i === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
                    {i === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
                </StarView>
                
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}