import Input from "./components/input";


const CheckingWallSize = () => {
    if (Input.value < 1 || Input.value > 15) {
        window.alert('Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros');
    }
};

export default CheckingWallSize;