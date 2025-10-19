def main():
    print("Welcome to Your First Python Lesson.")
    print("=" * 40)
    print("Python is a beginner-friendly programming language. Your first program is traditionally 'Hello World',")
    print("which simply prints a message to the screen. This teaches you the basics of writing and running code.")
    print("\nWhat you'll learn:")
    print("1. How to write a simple print statement.")
    print("2. How to save and run your code.")
    print("3. Common mistakes and fixes.")
    input("\nPress Enter to continue...")

    print("\nStep 1: Understanding the Code\n")
    print("The core of your program is this line:")
    print('print("Hello, World!")')
    print("\n- 'print' is a built-in function that outputs text.")
    print('- The text inside the quotes ("Hello, World!") is a string.')
    print("- Indentation and capitalization matters in Python!")
    input("\nPress Enter when you're ready to try writing it...")

    print("\nStep 2: Write Your Code")
    print("Type the exact line of code below (copy-paste if needed, but try typing it yourself):")
    print("Hint: It starts with 'print' and ends with a closing parenthesis.")
    
    correct_code = 'print("Hello, World!")'  # This is fine, but consider making it more flexible if needed
    user_code = ""
    while True:
        user_code = input("Enter your code here: ").strip()
        
        if user_code == correct_code:
            print("\n🎉 Perfect! That's exactly right.")
            break
        else:
            user_clean = user_code.lower().replace(" ", "").replace(",", "").replace('"', "").replace("'", "")
            correct_clean = correct_code.lower().replace(" ", "").replace(",", "").replace('"', "").replace("'", "")
            if user_clean == correct_clean:
                print("\n👍 Great job! Your code works, even with small differences like extra spaces or the comma.")
                print("Python is forgiving with whitespace, but quotes and parentheses must match.")
                break
            else:
                print("\n😊 Close, but not quite! Here's what you entered:")
                print(f'"{user_code}"')
                print("Expected: print(\"Hello, World!\")")
                print("Common fixes:")
                print("- Use double quotes around the text, or single quotes: print('Hello, World!')")
                print("- Make sure parentheses () match.")
                print("- Capitalize 'print' correctly.")
                print("- No extra characters outside the quotes.")
                print("- Or you typed it wrong.")
                retry = input("\nWant to try again?\n Type (yes or no): ").lower().strip()
                if retry != 'y':
                    print("No worries! Practice in a text editor.")
                    break

    print("\nStep 3: Saving and Running Your Code")
    print("1. Open a text editor (like Notepad, VS Code, or IDLE).")
    print("2. Type your code: print(\"Hello, World!\")")
    print("3. Save the file with a .py extension, e.g., hello_world.py")
    print("4. Open a terminal/command prompt in that folder.")
    print("5. Run it by typing: python hello_world.py (or python3 on some systems).")
    print("You should see: Hello, World!")
    print("\nIf you get errors:")
    print("- 'python not found': Install Python from python.org")
    print("- SyntaxError: Check quotes and parentheses.")
    print("- IndentationError: No extra spaces before 'print'.")

    print("\nStep 4: Experiment!")
    print("Try changing the message: print(\"Hello, [Your Name]!\")")
    print("Or add another line: print(\"This is fun!\")")
    print("\nCongratulations! You've written your first Python program. Keep practicing!")
    print("Next steps: Learn variables, loops, and functions. Resources: python.org or freeCodeCamp.")

    input("\nPress Enter to exit...")

if __name__ == "__main__":
    main()