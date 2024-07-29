# import pandas as pd

# workout_routines = {
#     'Upper-Lower 3 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
#     },
#     'Upper-Lower 4 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank']
#     },
#     'Upper-Lower 5 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
#         'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
#     },
#     'Upper-Lower 6 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
#         'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 6': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers']
#     },
#     'Power Series 3 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
#     },
#     'Power Series 5 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
#         'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
#     },
#     'Power Series 6 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
#         'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 6': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers']
#     },
#     'Pro Split 4 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank']
#     },
#     'Push-Pull-Leg 3 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
#     },
#     'Push-Pull-Leg 5 Days': {
#         'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
#         'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
#         'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
#         'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
#         'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
#     }
# }

# def generate_excel(workout_routines):
#     with pd.ExcelWriter('workout_routines.xlsx') as writer:
#         for routine, days in workout_routines.items():
#             for day, exercises in days.items():
#                 df = pd.DataFrame(exercises, columns=['Exercise'])
#                 sheet_name = f"{routine}_{day}".replace(" ", "_")
#                 df.to_excel(writer, sheet_name=sheet_name[:31], index=False)

# if __name__ == "__main__":
#     generate_excel(workout_routines)
#     print("Excel file 'workout_routines.xlsx' has been created.")

import pandas as pd
import os

# Exercise data
exercise_data = {
    'Upper-Lower 3 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
    },
    'Upper-Lower 4 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank']
    },
    'Upper-Lower 5 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
        'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
    },
    'Upper-Lower 6 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
        'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 6': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers']
    },
    'Power Series 3 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
    },
    'Power Series 5 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
        'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
    },
    'Power Series 6 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
        'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 6': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers']
    },
    'Pro Split 4 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank']
    },
    'Push-Pull-Leg 3 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls']
    },
    'Push-Pull-Leg 5 Days': {
        'Day 1': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions'],
        'Day 2': ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Triceps Dips', 'Triceps Pushdown', 'Overhead Triceps Extension', 'Skull Crushers'],
        'Day 3': ['Pull Up', 'Bent Over Row', 'Lat Pulldown', 'Seated Row', 'Bicep Curl', 'Hammer Curl', 'Face Pulls'],
        'Day 4': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Rear Delt Flyes', 'Upright Row', 'Plank'],
        'Day 5': ['Squat', 'Deadlift', 'Leg Press', 'Lunges', 'Calf Raises', 'Leg Curls', 'Leg Extensions']
    },
}

# Ensure the output directory exists
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Function

# Function to create and save an Excel file for each exercise program, with each day as a column
def create_excel_files(exercise_data):
    for program, days in exercise_data.items():
        df_dict = {}
        for day, exercises in days.items():
            df_dict[day] = exercises
        df = pd.DataFrame(df_dict)
        df.to_excel(f"{output_dir}/{program}.xlsx", index=False)

create_excel_files(exercise_data)