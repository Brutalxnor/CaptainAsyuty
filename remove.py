import os

# Path to the main folder containing subfolders with gifs
main_folder_path = "D:/elAsyuty website/fitness-website/public/gifs"

# Function to rename files by removing spaces in their names
def rename_files_in_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".gif"):
                new_name = file.replace(" ", "")
                os.rename(os.path.join(root, file), os.path.join(root, new_name))

# Execute the function
rename_files_in_folder(main_folder_path)

print("Files have been renamed successfully.")
