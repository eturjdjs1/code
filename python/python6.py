from collections import Counter 
def find_most_frequent(nums):
    if not nums:
        return None
    count = Counter(nums)
    most_common = count.most_common(1)
    return most_common[0] if most_common else None

nums = [1, 3, 2, 3, 4, 3, 2, 1, 3]
result = find_most_frequent(nums)
print(result)
