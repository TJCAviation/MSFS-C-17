import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Container from '@mui/material/Container';
import { useSimVar } from '../../../Hooks/simVars';

import './Cargo.scss';

export const Cargo = () => {
	let [removeTags, setremoveTags] = useSimVar('L:C17_RBF_TAGS', 'bool');
	let [rearDoorL, setRearDoorL] = useSimVar('L:C17_PARA_L', 'bool');
	let [rearDoorR, setRearDoorR] = useSimVar('L:C17_PARA_R', 'bool');
	let [CargoDoor, setCargoDoor] = useSimVar('L:C17_CargoDoor_POS', 'enum');
	let [ARSlipway, setARSlipway] = useSimVar('L:C17_UARRSI_Slipway', 'bool');
	let [EnteranceDoor, setEnteranceDoor] = useSimVar('L:C17_Crew_Enterance', 'bool');

	const handleChange = (event: Event, newValue: number | number[]) =>{
		setCargoDoor(newValue as number)
	  }

	return (
		<div className="cargoContainer">
			<Box
				sx={{
					position: 'absolute',
					width: 1040,
					height: 810,
					backgroundImage: 'url(/Images/C17_Home.png)',
					backgroundPosition: 'right',
					backgroundSize: '80%',
					backgroundRepeat: 'no-repeat',
					borderRadius: 4,
					left: 5,
					boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
					color: '#1B93FF',
					justifyContent: 'center',
					display: 'flex',
					textAlign: 'center',
					fontSize: 14,
				}}
			>
				
				<h1 style={{ marginLeft: 15, color: '#1B93FF' }}>
					Cargo Customization
				</h1>
				<Box
					sx={{
						position: 'absolute',
						width: 200,
						height: 200,
						backgroundColor: '16161E',
						borderRadius: 4,
						left: 15,
						top: 520,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Container maxWidth="sm">
					<Button
						onClick={() => setremoveTags(!removeTags)}
						size="small"
						variant="contained"
						color={removeTags ? 'error' : 'success'}
					>
						Cones & Covers
					</Button>
					</Container>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 110,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 300,
						top: 389,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setARSlipway(!ARSlipway)}
						size="small"
						variant="contained"
						color={ARSlipway ? 'error' : 'success'}
					>
						A/R Slipway
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 110,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 360,
						top: 455,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setEnteranceDoor(!EnteranceDoor)}
						size="small"
						variant="contained"
						color={EnteranceDoor ? 'error' : 'success'}
					>
						crew door
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 740,
						top: 280,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setRearDoorR(!rearDoorR)}
						color={rearDoorR ? 'error' : 'success'}
						size="small"
						variant="contained"
					>
						Para Door R
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 740,
						top: 480,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setRearDoorL(!rearDoorL)}
						color={rearDoorL ? 'error' : 'success'}
						size="small"
						variant="contained"
					>
						para Door L
					</Button>
				</Box>


			<Box
				sx={{
					position: 'absolute',
					width: 250,
					height: 90,
					backgroundColor: '16161E',
					borderRadius: 1,
					left: 740,
					top: 360,
					boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
					color: '#1B93FF',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					alignItems: 'center',
					fontSize: 14,

				}}>
				<Typography id="input-slider" gutterBottom>
					Cargo Bay Position
				</Typography>
			<Box
			sx={{
				width: 200,
				height: 135,
			}}
			>
			<Slider 
			aria-labelledby="brightness" 
			value={CargoDoor} 
			onChange={handleChange} 
			step={50}  
			
			
			/> 
					
			</Box>			
			</Box>

		</Box>

		</div>
	);
};
