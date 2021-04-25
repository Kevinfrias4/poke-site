import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particleConfig';

export default function ParticleBackground () {
    return (
        <Particles style={{ height: '100%', width: '100%', zIndex: '-1' }} params={particlesConfig}></Particles>
    );
}

//style={{ zIndex: 1, height: '100%', position: 'fixed', transform: 'translateX(-160px)'}}