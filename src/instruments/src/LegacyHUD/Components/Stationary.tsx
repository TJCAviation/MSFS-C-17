import React from 'react';
import { useSimVar } from '../../Hooks/simVars';

export const Stationary = () => {
    var [RADalt] = useSimVar('PLANE ALT ABOVE GROUND', 'feet')
    RADalt = Math.floor(RADalt)
    const [DCLT] = useSimVar('L:C17_DCLT', 'bool');

    let ShowRA: number = 1;
  
    if (RADalt <= 1500) {
        ShowRA = 1
    } else {
        ShowRA = 0
    }
    var [IndicatedSpeed] = useSimVar('AIRSPEED INDICATED', 'knots');
    IndicatedSpeed = Math.floor(IndicatedSpeed)
    var [VS] = useSimVar('VERTICAL SPEED', 'feet per minute');
    VS = Math.floor(VS/20)*20
    var [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
    AP_ALT = Math.floor(AP_ALT/10)
    const [AP_ALT_ON] = useSimVar('A:Autopilot altitude lock', 'bool');
    var [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
    AP_SPD = Math.floor(AP_SPD/10)

    const [AP_SPD_ON] = useSimVar('A:AUTOPILOT AIRSPEED HOLD', 'bool');


    var [Accel_Forwards] = useSimVar('A:ACCELERATION BODY Z', 'feet per second squared');
    Accel_Forwards = Math.floor(Accel_Forwards*100)/100
    if ( Accel_Forwards>=6) {
        Accel_Forwards = 6
    } else if(Accel_Forwards<=-6){
        Accel_Forwards = -6
    }else{
        Accel_Forwards = Accel_Forwards
    }

    Accel_Forwards=Accel_Forwards*10

    return(
        <g>
            <g transform={`translate(458, 120), scale(2,1.93)`}>
                <line className="a" x1="26.32" y1="16.12" x2="26.32" y2="21.53"/>
                <line className="a" x1="45.06" y1="11.15" x2="45.06" y2="16.16"/>
                <path className="a" d="M59.21,4.11C29.76,5.34,12.06,14.54,1.43,21.25L7.75,30l2.94-2L8,23.74,5,19.08l3,4.66c1.79,0,21.94-14.38,53.64-14.42"/>
                <polyline className="a" points="63.47 1 69.38 1 63.89 13.66 58.39 1 63.47 1"/>
                <line className="a" x1="101.59" y1="16.12" x2="101.59" y2="21.53"/>
                <line className="a" x1="82.85" y1="11.15" x2="82.85" y2="16.16"/>
                <path className="a" d="M68.7,4.11c29.45,1.23,47.15,10.43,57.77,17.14L120.16,30l-3-2,2.7-4.18,3-4.66-3,4.66c-1.8,0-21.94-14.38-53.64-14.42"/>
            </g>

            <text x={485} y={428} fontSize={32} textAnchor="end">{IndicatedSpeed}</text>
            <text x={795} y={468} fontSize={32} textAnchor="end">{VS}</text>
            <text x={795} y={428} fontSize={32} textAnchor="end">{RADalt}</text>

            <text visibility={DCLT ? 'visible' : 'hidden'} x={125} y={318} fontSize={32} textAnchor="end">{IndicatedSpeed}</text>


            <line visibility={DCLT ? 'hidden' : 'visible'} className="a2" x1="140" y1="448" x2="171" y2="448" strokeWidth={4}/>
            <circle visibility={DCLT ? 'hidden' : 'visible'} cx="190" cy="448" r="18" className="a2" fill='none' strokeWidth={4} />

            <g visibility={DCLT ? 'hidden' : 'visible'} transform={`translate(1170, 0), scale(-1,1)`}>
                <line className="a2" x1="140" y1="448" x2="171" y2="448" strokeWidth={4}/>
                <circle cx="190" cy="448" r="18" className="a2" fill='none' strokeWidth={4} />
            </g>

            {/* <g transform={`translate(0, 0), scale(0.88)`}>
                <path d="M722 6H1192.5L1318 131.5M722 1435.5H1192.5L1318 1310M724 6H131.5L6 131M722.5 1436H131.5L6 1310" className="a2" stroke-width="5"/>
                <path d="M1318.5 131V1311M5.49994 131L5.49999 1311" className="a2" stroke-width="5" stroke-dasharray="55 15"/>
            </g> */}
            <g transform={`translate(530 445)scale(0.86)`}>
                <path d="M0 3.5H18.5L41.5 41L61 0.5H68L87.5 41L110.5 3.5H129" fill='none' strokeWidth={4} className='readouts'/>
            </g>
            <g visibility={ShowRA ? 'visible' : 'hidden'} >
                <text x={1142} y={748} fontSize={33} className='FrontPNL' textAnchor="end">{RADalt}</text>
                <text x={1009} y={748} fontSize={33} className='FrontPNL' textAnchor="end">RA</text>
            </g>
            <g visibility={AP_ALT_ON ? 'visible' : 'hidden'} >
                <text x={955} y={187} fontSize={32} textAnchor="start">ALT {AP_ALT}</text>
                <line className="readouts" x1="925" y1="155" x2="1100" y2="155" strokeWidth={3}/>
            </g>
            <g visibility={AP_SPD_ON ? 'visible' : 'hidden'} >
                <text x={955} y={147} fontSize={32} textAnchor="start">IAS {AP_SPD}</text>
                <line className="readouts" x1="925" y1="155" x2="1100" y2="155" strokeWidth={3}/>
            </g>
            <g transform={`translate(0 ${-Accel_Forwards})`}>
                <polygon points='512,456 512,440 526,448' className='readouts' strokeWidth={3} fill='none'/>
            </g>

        </g>
    )
};