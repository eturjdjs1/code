target = int(input())
nums = [2,7,11,15]
def find_two_sum(nums, target):
    seen = {}  # Dictionary to store seen numbers and their indices
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [diff, num]  # Pair found
        seen[num] = i  # Store current number and its index
    return None  # No pair found
print (find_two_sum(nums,target))