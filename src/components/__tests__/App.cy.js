import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    let wrapper;
    let cars;
    let selectedMarca;
    let selectedModelo;
    let isUpdating;
    let selectedIndex;

    beforeEach(() => {
        cars = ref([
            { marca: 'Nissan', modelo: 'GT-R™' },
            { marca: 'Audi', modelo: 'S e-tron GT' },
            { marca: 'Lamborghini', modelo: 'Murcielago LP640-4 Coupé' }
        ]);
        selectedMarca = ref('');
        selectedModelo = ref('');
        isUpdating = ref(false);
        selectedIndex = ref(null);

        wrapper = mount(App, {
            data() {
                return {
                    cars,
                    selectedMarca,
                    selectedModelo,
                    isUpdating,
                    selectedIndex
                };
            }
        });
    });

    it('selectCar actualiza los valores seleccionados correctamente', () => {
        const car = { marca: 'Audi', modelo: 'S e-tron GT' };
        const index = 1;
        wrapper.vm.selectCar(car, index);

        expect(wrapper.vm.selectedMarca).to.equal('Audi');
        expect(wrapper.vm.selectedModelo).to.equal('S e-tron GT');
        expect(wrapper.vm.isUpdating).to.be.true;
        expect(wrapper.vm.selectedIndex).to.equal(1);
    });

    it('updateCar actualiza el coche en la lista correctamente', () => {
        const updatedCar = { marca: 'Tesla', modelo: 'Model S' };
        wrapper.vm.selectedIndex = 1;
        wrapper.vm.updateCar(updatedCar);

        expect(wrapper.vm.cars[1]).to.deep.equal(updatedCar);
        expect(wrapper.vm.selectedMarca).to.equal('');
        expect(wrapper.vm.selectedModelo).to.equal('');
        expect(wrapper.vm.isUpdating).to.be.false;
    });
    expect(wrapper.vm.isUpdating).to.be.true;
    expect(wrapper.vm.selectedIndex).to.equal(1);

    it('updateCar actualiza el coche en la lista correctamente', () => {
        const updatedCar = { marca: 'Tesla', modelo: 'Model S' };
        wrapper.vm.selectedIndex = 1;
        wrapper.vm.updateCar(updatedCar);

        expect(wrapper.vm.cars[1]).to.deep.equal(updatedCar);
        expect(wrapper.vm.selectedMarca).to.equal('');
        expect(wrapper.vm.selectedModelo).to.equal('');
        expect(wrapper.vm.isUpdating).to.be.false;
        expect(wrapper.vm.selectedIndex).to.be.null;
    });

    it('cancelUpdate restablece los valores seleccionados correctamente', () => {
        wrapper.vm.selectedMarca = 'Audi';
        wrapper.vm.selectedModelo = 'S e-tron GT';
        wrapper.vm.isUpdating = true;
        wrapper.vm.selectedIndex = 1;

        wrapper.vm.cancelUpdate();

        expect(wrapper.vm.selectedMarca).to.equal('');
        expect(wrapper.vm.selectedModelo).to.equal('');
        expect(wrapper.vm.isUpdating).to.be.false;
        expect(wrapper.vm.selectedIndex).to.be.null;
    });
});