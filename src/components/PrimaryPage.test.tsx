// @ts-ignore
import PrimaryPage from './PrimaryPage'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('PrimaryPage', () => {
    it('just render', () => {
        const Comp = <PrimaryPage />
        const component = shallow(Comp)
        expect(component.debug()).toMatchSnapshot()
    })
})
