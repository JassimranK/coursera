def sort_and_count(arr)
	if arr.length <= 1
		return [0, arr]
	end

	mid = arr.length / 2
	left_arr = arr[0..(mid - 1)]
	right_arr = arr[mid..(arr.length - 1)]

	left_result = sort_and_count(left_arr)
	right_result = sort_and_count(right_arr)
	merge_result = merge_and_count(left_result[1], right_result[1])

	return [left_result[0] + right_result[0] + merge_result[0],
		merge_result[1]]
end

def merge_and_count(left_arr, right_arr)
	inversions = 0
	output = []
	i,j = 0,0
	while i < left_arr.length and j < right_arr.length
		if left_arr[i] < right_arr[j]
			output << left_arr[i]
			i+=1
		else
			output << right_arr[j]
			j+=1
			inversions += left_arr.length - i
		end
	end

	if i < left_arr.length
		output += left_arr[i..(left_arr.length - 1)]
	else
		output += right_arr[j..(right_arr.length - 1)]
	end

	return [inversions, output]
end

#test:
numbersarr = []
File.open("testfile.txt").each do |number|
    numbersarr << number.to_i
end

result = sort_and_count numbersarr
puts "number of inverstions: " + result[0].to_s
#puts "ordered array: " + result[1].to_s
