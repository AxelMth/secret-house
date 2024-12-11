import pygame
import sys


def play_sound(file_path):

    # Initialize pygame mixer
    pygame.mixer.init()
    
    # Load the mp3 file
    pygame.mixer.music.load(file_path)
    
    # Play the mp3 file
    pygame.mixer.music.play()
    
    # Keep the script running until the music stops
    while pygame.mixer.music.get_busy():
        pygame.time.Clock().tick(10)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python play_sound.py <path_to_mp3_file>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    play_sound('public/buzz.mp3')
    
    # wait for 1 second
    pygame.time.wait(1000)
    
    play_sound(file_path)