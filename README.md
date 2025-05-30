CRT SCREEN WITH MV and ART
https://crt-75hd.vercel.app

![image](https://user-images.githubusercontent.com/93302780/208246505-fe1af047-9350-49bb-b93a-e61800ad4144.png)

```py
import Jetson.GPIO as GPIO
import time

# Set pin numbering mode
GPIO.setmode(GPIO.BOARD)

# Motor control pins (adjust these based on your Wave Rover connections)
MOTOR_LEFT_DIR = 11
MOTOR_LEFT_EN = 13
MOTOR_RIGHT_DIR = 15
MOTOR_RIGHT_EN = 16

# Set up GPIO pins
GPIO.setup(MOTOR_LEFT_DIR, GPIO.OUT)
GPIO.setup(MOTOR_LEFT_EN, GPIO.OUT)
GPIO.setup(MOTOR_RIGHT_DIR, GPIO.OUT)
GPIO.setup(MOTOR_RIGHT_EN, GPIO.OUT)

def move_forward():
    print("Moving forward...")
    GPIO.output(MOTOR_LEFT_DIR, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_DIR, GPIO.HIGH)
    GPIO.output(MOTOR_LEFT_EN, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_EN, GPIO.HIGH)

def stop_motors():
    print("Stopping motors...")
    GPIO.output(MOTOR_LEFT_EN, GPIO.LOW)
    GPIO.output(MOTOR_RIGHT_EN, GPIO.LOW)

def move_backward():
    print("Moving backward...")
    GPIO.output(MOTOR_LEFT_DIR, GPIO.LOW)
    GPIO.output(MOTOR_RIGHT_DIR, GPIO.LOW)
    GPIO.output(MOTOR_LEFT_EN, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_EN, GPIO.HIGH)

def turn_left():
    print("Turning left...")
    GPIO.output(MOTOR_LEFT_DIR, GPIO.LOW)
    GPIO.output(MOTOR_RIGHT_DIR, GPIO.HIGH)
    GPIO.output(MOTOR_LEFT_EN, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_EN, GPIO.HIGH)

def turn_right():
    print("Turning right...")
    GPIO.output(MOTOR_LEFT_DIR, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_DIR, GPIO.LOW)
    GPIO.output(MOTOR_LEFT_EN, GPIO.HIGH)
    GPIO.output(MOTOR_RIGHT_EN, GPIO.HIGH)

try:
    print("Wave Rover Test Starting...")
    
    # Test sequence
    move_forward()
    time.sleep(2)
    
    stop_motors()
    time.sleep(1)
    
    move_backward()
    time.sleep(2)
    
    stop_motors()
    time.sleep(1)
    
    turn_left()
    time.sleep(1)
    
    turn_right()
    time.sleep(1)
    
    stop_motors()
    print("Test complete!")

except KeyboardInterrupt:
    print("Test interrupted!")

finally:
    GPIO.cleanup()
    print("GPIO cleaned up")
    ```
