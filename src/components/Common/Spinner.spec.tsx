// @ts-ignore
import Spinner from './Spinner'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('PrimaryPage', () => {
    it('just render', () => {
        const component = shallow(<div>121312412</div>)
        expect(component.debug()).toMatchSnapshot()
        console.log(component.debug())
    })
})
