const noble = require("@abandonware/noble");

// Replace 'your_device_uuid' with the UUID of your Bluetooth device
const deviceUUID = "your_device_uuid";

noble.on("stateChange", (state) => {
	console.log("state: ", state);
	if (state === "poweredOn") {
		console.log("Bluetooth is powered on. Scanning for devices...");
		// noble.startScanningAsync();
		noble.startScanning([], true, (error) => {
			console.log("error: ", error);
		});
	} else {
		noble.stopScanning();
		console.log("Bluetooth is not powered on. Please enable Bluetooth.");
	}
});

noble.on("discover", async (peripheral) => {
	console.log(
		`Found device: ${peripheral.advertisement.localName} (UUID: ${peripheral.uuid})`
	);
	console.log("Advertisement Data:", peripheral.advertisement);
});

noble.on("warning", (message) => {
	console.log("Warning:", message);
});

noble.on("scanStop", () => {
	console.log("Scan stopped.");
});

// noble.on("discover", (peripheral) => {
// 	if (peripheral.uuid === deviceUUID) {
// 		console.log(`Found your device: ${peripheral.advertisement.localName}`);

// 		noble.stopScanning();

// 		peripheral.connect((error) => {
// 			if (!error) {
// 				console.log("Connected to the device.");

// 				peripheral.on("disconnect", () => {
// 					console.log("Disconnected from the device.");
// 					process.exit();
// 				});

// 				peripheral.discoverServices([], (error, services) => {
// 					services.forEach((service) => {
// 						service.discoverCharacteristics(
// 							[],
// 							(error, characteristics) => {
// 								characteristics.forEach((characteristic) => {
// 									characteristic.on(
// 										"data",
// 										(data, isNotification) => {
// 											console.log(
// 												`Received data: ${data.toString(
// 													"utf-8"
// 												)}`
// 											);
// 										}
// 									);

// 									// Enable notifications if needed
// 									characteristic.subscribe((error) => {
// 										if (error) {
// 											console.error(
// 												"Failed to subscribe to notifications:",
// 												error
// 											);
// 										}
// 									});
// 								});
// 							}
// 						);
// 					});
// 				});
// 			} else {
// 				console.error("Failed to connect to the device:", error);
// 			}
// 		});
// 	}
// });
