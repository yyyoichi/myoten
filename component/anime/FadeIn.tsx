import { useSpring, animated } from 'react-spring';

type Props = {
    toggle: boolean,
    // styles: React.CSSProperties,
    children: React.ReactNode,
    display: boolean
}
export default function FadeIn(props: Props) {
    let s = {
        opacity: props.toggle ? 1 : 0,
        display: "block"
    }
    if (props.display) {
        s = {
            ...s,
            display: props.toggle ? "block" : "none"
        }
    }
    const styles = useSpring(s);
    return (
        <animated.div style={styles}>
            {props.children}
        </animated.div>
    )
}