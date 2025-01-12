def find_most_frequent_consecutive_char(s):
    if not s:
        return None, 0  # Trả về None và 0 nếu chuỗi rỗng

    max_char = s[0]
    max_count = 1
    current_char = s[0]
    current_count = 1

    for i in range(1, len(s)):
        if s[i] == current_char:
            current_count += 1
        else:
            if current_count > max_count:
                max_char = current_char
                max_count = current_count
            current_char = s[i]
            current_count = 1

    # Kiểm tra lần cuối sau khi duyệt hết chuỗi
    if current_count > max_count:
        max_char = current_char
        max_count = current_count

    return max_char, max_count

# Ví dụ sử dụng
s = "aaabbccccddddddeee"
char, count = find_most_frequent_consecutive_char(s)
print(f"Ký tự lặp lại liên tiếp nhiều nhất là '{char}' với độ dài {count}.")
