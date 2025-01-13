function Icon({ fill, height, viewBox, width, d, fillPath}) {
    return (
        <svg fill={fill} height={height} viewBox={viewBox} width={width} xmlns="http://www.w3.org/2000/svg">
            <path
                d={d}
                fill={fillPath}
            />
        </svg>
    );
}

export default Icon;