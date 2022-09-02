def study_schedule(start_time, end_time, target_time):
    count = 0
    if not target_time:
        return 0
    for time in range(len(start_time)):
        if start_time[time] <= target_time <= end_time[time]:
            count += 1

    return count