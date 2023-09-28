import React, { useEffect, useState, useRef } from 'react';
import { useSimVar } from '../../Hooks/simVars';
import "../style.scss";

export const AURALS = () => {
  let [ATEngaged] = useSimVar('A:AUTOPILOT THROTTLE ARM', 'bool');
  let [ATWarning, setATWarning] = useSimVar('L:C17_AT_warning', 'bool');

  let [WacsFail, setWacsFail] = useSimVar('L:C17_ALERT_Wacs_Fail', 'bool');
  let [Avionics_PWR] = useSimVar('A:CIRCUIT ON:65', 'bool');
  let [Cargo_door] = useSimVar('L:C17_CargoDoor_POS', 'enum');
  let [Cargo_door_Sound, setCargoDoorSound] = useSimVar('L:C17_CargoDoor_Sound', 'bool');
  let [StabMotion, setStabMotion] = useSimVar('L:C17_STAB_MOTION', 'bool');
  let [Stab_Trim] = useSimVar('A:ELEVATOR TRIM PCT', 'degrees');
  let [SimOnGround] = useSimVar('A:SIM ON GROUND', 'bool');
  const prevStab_TrimRef = useRef(Stab_Trim); // Store the previous value of Stab_Trim
  const isInitialRender = useRef(true);

// Use separate refs for each effect's initial render check
const isInitialRenderCargo = useRef(true);
const isInitialRenderAT = useRef(true);
const isInitialRenderStab = useRef(true);
const isInitialRenderWacs = useRef(true);

const [timerActive, setTimerActive] = useState(false);
const [isStabMotionActive, setIsStabMotionActive] = useState(false);

useEffect(() => {
  // Check if ATEngaged transitioned from 1 to 0
  if (!isInitialRenderAT.current && ATEngaged === false && timerActive === false) {
    // Set ATWarning to true
    setATWarning(true);

    // Start a 4-second timer to reset ATWarning
    const timerId = setTimeout(() => {
      setATWarning(false);
      setTimerActive(false);
    }, 4000); // 4000 milliseconds = 4 seconds

    // Set timerActive to true to prevent multiple timers
    setTimerActive(true);

    // Cleanup the timer if the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  } else if (ATEngaged === true && timerActive === true) {
    // Reset the timer if ATEngaged changes back to 1 before the timer expires
    setTimerActive(false);
  }
}, [ATEngaged, timerActive])

useEffect(() => {
  // Check if there's power and the aircraft is on the ground
  if (!isInitialRenderStab.current && Avionics_PWR && SimOnGround) {
    // Check if Stab_Trim has changed from the previous value
    if (Stab_Trim !== prevStab_TrimRef.current) {
      setIsStabMotionActive(true); // Turn on StabMotion
    }

    // Use a timer to turn off StabMotion after one second if it was turned on
    if (isStabMotionActive) {
      const turnOffTimeout = setTimeout(() => {
        setIsStabMotionActive(false);
      }, 1000); // 1000 milliseconds = 1 second

      // Cleanup the timer when the component unmounts, power is lost, not on the ground, or Stab_Trim changes
      return () => {
        clearTimeout(turnOffTimeout);
      };
    }
  } else {
    // Reset StabMotion when power is lost, not on the ground, or Stab_Trim changes
    setIsStabMotionActive(false);
  }

  // Update the previous value of Stab_Trim
  prevStab_TrimRef.current = Stab_Trim;
}, [Avionics_PWR, SimOnGround, Stab_Trim]);

useEffect(() => {
  // Check if Cargo_door changes
  if (!isInitialRenderCargo.current) {
    // Set Cargo_door_Sound to true when Cargo_door changes
    setCargoDoorSound(true);

    // Use setTimeout to reset Cargo_door_Sound to false after 5 seconds
    const timeoutId = setTimeout(() => {
      setCargoDoorSound(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timer if the component unmounts or if Cargo_door changes
    return () => {
      clearTimeout(timeoutId)
    };
  }
}, [Cargo_door])

useEffect(() => {
  // Check if Avionics_PWR changes
  if (!isInitialRenderWacs.current && Avionics_PWR) {
    // Use setTimeout to delay setting WacsFail to true
    const delay = 2000; // 2000 milliseconds = 2 seconds
    const timerId = setTimeout(() => {
      setWacsFail(true);
    }, delay);

    // Cleanup the timer if the component unmounts or Avionics_PWR changes
    return () => clearTimeout(timerId)
  }
}, [Avionics_PWR])

// Set the corresponding ref to false after the initial render
useEffect(() => {
  isInitialRenderCargo.current = false;
}, []);

useEffect(() => {
  isInitialRenderAT.current = false;
}, []);

useEffect(() => {
  isInitialRenderStab.current = false;
}, []);

useEffect(() => {
  isInitialRenderWacs.current = false;
}, []);

  return (
      <g>
          <text x={50} y={50} fontSize={100} fill='white' className='ESIS'>{WacsFail*Cargo_door_Sound*StabMotion*ATWarning}</text>
      </g>
  );
};