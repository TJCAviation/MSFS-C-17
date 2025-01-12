import React, { useEffect, useState, useRef } from 'react';
import { render } from "../../Hooks/index";
import { useSimVar } from '../../Hooks/simVars';
import "../style.scss";

export const AURALS = () => {


  let [WacsFail, setWacsFail] = useSimVar('L:C17_ALERT_Wacs_Fail', 'bool');
  let [Avionics_PWR] = useSimVar('A:CIRCUIT ON:65', 'bool');
  let [Cargo_door] = useSimVar('L:C17_CargoDoor_POS', 'enum');
  let [Cargo_door_Sound, setCargoDoorSound] = useSimVar('L:C17_CargoDoor_Sound', 'bool');
  let [StabMotion, setStabMotion] = useSimVar('L:C17_STAB_MOTION', 'bool');
  let [Stab_Trim] = useSimVar('A:ELEVATOR TRIM PCT', 'degrees');
  let [SimOnGround] = useSimVar('A:SIM ON GROUND', 'bool');
  let [ATEngaged] = useSimVar('A:AUTOTHROTTLE ACTIVE', 'bool');
  let [ThrrotleWarning, setThrrotleWarning] = useSimVar('L:C17_AT_warning', 'bool');

const isInitialRenderCargo = useRef(true);
const isInitialRenderWacs = useRef(true);

useEffect(() => {
  // Check if ATEngaged went from 1 to 0
  if (ATEngaged === false) {
    // Set ATWarning to true
    setThrrotleWarning(true)
    const delayA = 2000; // 2000 milliseconds = 2 second
    // Set a timer to reset ATWarning to false after 3 seconds
    const timerAT = setTimeout(() => {
      setThrrotleWarning(false)
    }, delayA)

    // Clear the timer when ATEngaged changes again or the component unmounts
    return () => clearTimeout(timerAT)
  }
}, [ATEngaged]);

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
}, [Cargo_door]);

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
}, [Avionics_PWR]);

// Set the corresponding ref to false after the initial render
useEffect(() => {
  isInitialRenderCargo.current = false;
}, []);

useEffect(() => {
  isInitialRenderWacs.current = false;
}, []);

  return (
      <g>
          <text x={50} y={50} fontSize={100} fill='white'>{ThrrotleWarning && ATEngaged && WacsFail && Cargo_door_Sound && StabMotion && ThrrotleWarning && ATEngaged}</text>
      </g>
  );
};
