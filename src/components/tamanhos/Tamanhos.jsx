import React, { useState } from "react";
import "./Tamanhos.css"
const Tamanhos = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        if (item.classList.contains('numero') && !item.classList.contains('naoTem') && selectedItem !== item) {
            if (selectedItem) {
                selectedItem.classList.remove('selected');
            }
            item.classList.add('selected');
            setSelectedItem(item);
        } else if (selectedItem === item) {
            selectedItem.classList.remove('selected');
            setSelectedItem(null);
        }
    }

    return (
        <React.Fragment>
            <section>
                <h3 id="tamanhos">Tamanhos</h3>
                <div className="tamanhos">
                    <div className="numero" onClick={(e) => handleItemClick(e.target)}>35</div>
                    <div className="numero" onClick={(e) => handleItemClick(e.target)}>36</div>
                    <div className="numero naoTem">37</div>
                    <div className="numero naoTem">38</div>
                    <div className="numero" onClick={(e) => handleItemClick(e.target)}>39</div>
                    <div className="numero naoTem">40</div>
                    <div className="numero" onClick={(e) => handleItemClick(e.target)}>41</div>
                    <div className="numero" onClick={(e) => handleItemClick(e.target)}>42</div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Tamanhos
