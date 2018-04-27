def merge_sort(arr)
  # 0. Base case
  return arr if arr.length <= 1

  # 1. Divide
  mid = arr.length / 2
  l = merge_sort(arr[0, mid])
  r = merge_sort(arr[mid, arr.length])

  # 2. Conquer
  output = []
  invs = 0
  until l.empty? || r.empty?
    output << if l.first <= r.first
                l.shift
              else
                r.shift
                #puts "COunter value = #{$counter}"
                invs+=1
              end
  end
  # The order of `concat(l)` or `concat(r)` does not matters
  output.concat(l).concat(r)
  return [invs, output]
end

numarr = [7,6, 5, 4, 3, 2, 1 , 0]
res= merge_sort numarr
puts "------ Inversions = #{$res[0]}"
puts "Sorted array = #{$res[1]}"
